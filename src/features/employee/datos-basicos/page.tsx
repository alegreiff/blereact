import { Form } from "@/features/form/components/form";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
//import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import {
  useCities,
  useStates,
  useCasos,
  useTipoPersona,
  useVinculacion,
} from "@/features/employee/datos-basicos/hooks/useQueries";
import { useStore } from "@/features/employee/datos-basicos/hooks/useStore";
import {
  defaultValues,
  schema,
  Schema,
} from "@/features/employee/datos-basicos/types/schema";

import { d } from "@/utils/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useNavigate } from "react-router";
import {
  Autocomplete,
  AutocompleteOption,
} from "@/features/form/components/controllers/autocomplete";
import { useFormContext } from "@/features/form/hooks/useFormContext";

const Page = () => {
  const statesQuery = useStates();
  const citiesQuery = useCities();
  const casosQuery = useCasos();
  const tipopersonaQuery = useTipoPersona();
  const tipovinculacionQuery = useVinculacion();

  const { control, setValue } = useFormContext<Schema>();
  const state = useWatch({ control, name: "state" });

  const handleOptionSelect = (option: AutocompleteOption | null) => {
    if (!option) {
      setValue("city", "");
    }
  };

  const tipoVinculacion = useWatch({ control, name: "tipoVinculacion" });

  console.log("Vinculation type", tipoVinculacion);
  return (
    <>
      <Grid size={{ xs: 3 }}>
        <Autocomplete<Schema>
          name="caso"
          options={casosQuery.data}
          loading={casosQuery.isLoading}
          textFieldProps={{ label: d.casoRegistro }}
        />
      </Grid>
      <Grid size={{ xs: 3 }}>
        <Autocomplete<Schema>
          name="tipoVinculacion"
          options={tipovinculacionQuery.data}
          loading={tipovinculacionQuery.isLoading}
          textFieldProps={{ label: d.tipoVinculacion }}
        />
      </Grid>

      {tipoVinculacion === "Otro" && (
        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="otroTipoVinculacion"
            label={"Describa el tipo de vínculo"}
          />
        </Grid>
      )}
      {tipoVinculacion === "Proveedor" && (
        <Grid size={{ xs: 6 }}>
          <TextField<Schema>
            name="tipoServicioBien"
            label={d.tipoServicioBien}
          />
        </Grid>
      )}

      <Grid size={{ xs: 3 }}>
        <Autocomplete<Schema>
          name="tipoPersona"
          options={tipopersonaQuery.data}
          loading={tipopersonaQuery.isLoading}
          textFieldProps={{ label: d.tipoPersona }}
        />
      </Grid>

      <Grid size={{ xs: 3 }}>
        <DatePicker<Schema> name="fechaActual" label={d.fechaFormulario} />
      </Grid>
      <Grid size={{ xs: 12 }} />
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="state"
          options={statesQuery.data}
          loading={statesQuery.isLoading}
          textFieldProps={{ label: d.state }}
          onOptionSelect={handleOptionSelect}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        {!!state && (
          <Autocomplete<Schema>
            name="city"
            options={citiesQuery.data}
            loading={citiesQuery.isLoading}
            textFieldProps={{ label: d.city }}
          />
        )}
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
    navigate("/employee/personal-info");
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
      title={"Página básica BLE"}
    >
      <Page />
    </Form>
  );
};

export { Provider as DatosBasicos };
