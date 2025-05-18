import { Form } from "@/features/form/components/form";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { TextField } from "@/features/form/components/controllers/text-field";

import { useStore } from "@/features/employee/personal-info/hooks/useStore";

import { useStore as useDatosBasicosStore } from "@/features/employee/datos-basicos/hooks/useStore";
import {
  defaultValues,
  schema,
  Schema,
} from "@/features/employee/personal-info/types/schema";

import { d } from "@/utils/dictionary";
import Grid from "@mui/material/Grid2";

import { useNavigate } from "react-router";
import { SubmitHandler } from "react-hook-form";
import { Typography } from "@mui/material";
import { DatosPersonaBasicos } from "./components/datos-persona";

const Page = () => {
  const { formData: datosBasicos } = useDatosBasicosStore();
  const tipoPersona = datosBasicos?.tipoPersona;
  const tipoVinculacion = datosBasicos?.tipoVinculacion;
  console.log(tipoVinculacion);

  return (
    <>
      {tipoPersona !== "Natural" && (
        <>
          <Grid size={{ xs: 8 }}>
            <TextField<Schema> name="razonsocial" label={d.razonSocial} />
          </Grid>
          <Grid size={{ xs: 4 }}>
            <TextField<Schema>
              name="nit"
              label={d.nitempresa}
              format="nitNumber"
            />
          </Grid>

          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            size={{ xs: 12 }}
          >
            <Typography>{"Datos del representante legal"}:</Typography>
          </Grid>

          <DatosPersonaBasicos />
        </>
      )}
      {tipoPersona === "Natural" && (
        <>
          <DatosPersonaBasicos />
        </>
      )}

      <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="email" label={"CORREO"} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="streetAddress" label={"DIRECCIÓN"} />
      </Grid>
    </>
  );
};

type ProviderProps = { readOnly?: boolean };
const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();

  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/employee/history");
  };

  return (
    <Form
      submitButtonText={d.saveAndContinue}
      slotProps={{
        submitButtonProps: { startIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title={d.personalInfo}
    >
      <Page />
    </Form>
  );
};

export { Provider as EmployeePersonalInfo };
