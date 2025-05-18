

import { z } from "zod";

/* const workExperienceSchema = z.discriminatedUnion('hasWorkExperience', [z.object({
  hasWorkExperience: z.literal(true),
  companyName: z.string().min(1, { message: "Mínimo 1 caracter del nombre de la empresa" }),

}), z.object({
  hasWorkExperience: z.literal(false),
})]); */

/* const tipoVinculoSchema = z.discriminatedUnion("tipoVinculacion", [
  z.object({
    tipoVinculacion: z.literal("Cliente"),
  }),
  z.object({
    tipoVinculacion: z.literal("Proveedor"),
  }),
  z.object({
    tipoVinculacion: z.literal("Contratista"),
  }),
  z.object({
    tipoVinculacion: z.literal("Otro"),
    otroTipoVinculacion: z.string().min(1),
  })
]); */

const tipoVinculoSchema = z.object({
  tipoVinculacion: z.enum(["Cliente", "Proveedor", "Contratista", "Otro"]),
  otroTipoVinculacion: z.string().min(1).optional(), // Opcional, solo para "Otro"
  tipoServicioBien: z.string().min(1).optional(),
});

const schema = z.object({
  fechaActual: z.string().datetime(),

  state: z.string().min(1),
  city: z.string().min(1),

  caso: z.string().min(1, "Debes seleccionar si es vinculación o actualización "),
  tipoPersona: z.string().min(1, "Debes seleccionar el tipo de persona"),

}).and(tipoVinculoSchema);

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  city: "",
  state: "",
  caso: "",
  tipoPersona: "",
  tipoVinculacion: "Cliente",
  fechaActual: new Date().toISOString(),

  otroTipoVinculacion: " ",
  tipoServicioBien: " ",

};

export {
  schema,
  schema as datosBasicosSchema,
  type Schema,
  defaultValues,
};
