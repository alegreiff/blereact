//import { calculatePastDate } from "@/utils/calculatePastDate";
//import { regex } from "@/utils/regex";
import validator from "validator";
import { z } from "zod";

/* const schema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .min(1)
    .refine((val) => validator.isMobilePhone(val, "en-US")),
  dateOfBirth: z.coerce
    .date()
    .max(calculatePastDate(18))
    .min(calculatePastDate(100)),

  streetAddress: z.string().min(1),
  socialSecurityNumber: z.union([
    z.string().regex(regex.socialSecurityNumber),
    z.literal(""),
  ]),
}) */

const tipoDocumentoSchema = z.enum(["CC", "CE"]);
const schema = z.object({
  tipoDocumento: tipoDocumentoSchema,
  numeroDocumento: z.string().min(1),
  fechaExpedicion: z.string().datetime(),
  lugarExpedicion: z.string().min(1),
  fechaNacimiento: z.string().datetime(),
  departamentoNacimiento: z.string().min(1),
  municipioNacimiento: z.string().min(1),
  paisResidencia: z.string().min(1),
  tipoPersona: z.enum(["Natural", "Jurídica"]),
  primerApellido: z.string().min(1).max(50),
  segundoApellido: z.string().min(1).max(50),
  nombres: z.string().min(1).max(50),
  email: z.string().email(),
  streetAddress: z.string().min(1),
  razonsocial: z.string().optional(),
  businessAddress: z.string().optional(),
  departamentoResidencia: z.string().optional(),
  municipioResidencia: z.string().optional(),


  celularPersona: z
    .string()
    .min(1)
    .refine((val) => validator.isMobilePhone(val, "es-CO")),
  nit: z.string()
    .min(10, "El NIT debe tener 10 dígitos sin puntos ni guiones")
    .max(10, "El NIT debe tener exactamente 10 dígitos")
    .regex(/^\d{10}$/, "Solo se permiten números en el NIT").optional(),
}).superRefine((data, ctx) => {
  if (data.tipoPersona !== "Natural") {
    // Si es "Jurídica", companyName, taxId y businessAddress deben ser obligatorios
    if (!data.nit) {
      ctx.addIssue({ code: "custom", message: "El NIT es necesario", path: ["nit"] });
    }

    if (!data.razonsocial) {
      ctx.addIssue({ code: "custom", message: "El nombre de la empresa es obligatorio", path: ["razonsocial"] });
    }

    if (!data.businessAddress) {
      ctx.addIssue({ code: "custom", message: "La dirección comercial es obligatoria", path: ["businessAddress"] });
    }
  }

  // Validaciones cuando país de residencia es "Colombia"
  if (data.paisResidencia === "Colombia") {
    if (!data.departamentoResidencia) {
      ctx.addIssue({ code: "custom", message: "El departamento de residencia es obligatorio en Colombia", path: ["departamentoResidencia"] });
    }
    if (!data.municipioResidencia) {
      ctx.addIssue({ code: "custom", message: "La ciudad de residencia es obligatoria en Colombia", path: ["ciudadResidencia"] });
    }
  }


}


);
type Schema = z.infer<typeof schema>;
const defaultValues: Schema = {
  tipoPersona: "Natural",
  primerApellido: "",
  segundoApellido: "",
  tipoDocumento: "CC",
  numeroDocumento: "",
  fechaExpedicion: "",
  lugarExpedicion: "",
  fechaNacimiento: "",
  departamentoNacimiento: "",
  municipioNacimiento: "",
  paisResidencia: "Colombia",


  nombres: "",
  email: "",
  streetAddress: "",
  businessAddress: "",
  nit: "0000000000",
  razonsocial: "",



};

export {
  schema,
  schema as employeePersonalInfoSchema,
  type Schema,
  defaultValues,
};
