/* import { useProficiencyLevels } from "@/features/employee/skills/hooks/useQueries"; */

import { d } from "@/utils/dictionary";
import { TextField } from "@/features/form/components/controllers/text-field";
import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Schema } from "@/features/employee/personal-info/types/schema";
import {
  Autocomplete,
  AutocompleteOption,
} from "@/features/form/components/controllers/autocomplete";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import {
  useCities,
  useStates,
  usePais,
  useStatesRes,
  useCitiesRes,
} from "@/features/employee/personal-info/hooks/useQueries";
import { useWatch } from "react-hook-form";
import { useFormContext } from "@/features/form/hooks/useFormContext";
const DatosPersonaBasicos = () => {
  /* const proficiencyLevelsQuery = useProficiencyLevels(); */
  const tipoDocumento = [
    { value: "CC", label: "CC" },
    { value: "CE", label: "CE" },
  ];
  const deptoQuery = useStates();
  const citiesQuery = useCities();

  const paisQuery = usePais();
  const deptoResQuery = useStatesRes();
  const citiesResQuery = useCitiesRes();

  const { control, setValue } = useFormContext<Schema>();
  const depto = useWatch({ control, name: "departamentoNacimiento" });
  const deptoRes = useWatch({ control, name: "departamentoResidencia" });
  const paisResidencia = useWatch({ control, name: "paisResidencia" });
  console.log("Departamento Nacimiento:", depto);
  console.log("Departamento Residencia:", deptoRes);
  const handleOptionSelect = (option: AutocompleteOption | null) => {
    if (!option) {
      setValue("municipioNacimiento", "");
    }
  };

  const handleOptionSelectRes = (option: AutocompleteOption | null) => {
    if (!option) {
      setValue("municipioResidencia", "");
    }
  };
  return (
    <>
      <Grid sx={{ display: "flex", alignItems: "center" }} size={{ xs: 12 }}>
        <Typography>{d.datospersona}:</Typography>
      </Grid>

      <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="primerApellido" label={d.primerApellido} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="segundoApellido" label={d.segundoApellido} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="nombres" label={d.nombres} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <Autocomplete<Schema>
          name="tipoDocumento"
          options={tipoDocumento}
          textFieldProps={{ label: d.tipoDocumento }}
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="numeroDocumento" label={d.numeroDocumento} />
      </Grid>
      <Grid size={{ xs: 3 }}>
        <DatePicker<Schema> name="fechaExpedicion" label={d.fechaExpedicion} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="lugarExpedicion" label={d.lugarExpedicion} />
      </Grid>
      <Grid size={{ xs: 3 }}>
        <DatePicker<Schema> name="fechaNacimiento" label={d.fechaNacimiento} />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="departamentoNacimiento"
          options={deptoQuery.data}
          loading={deptoQuery.isLoading}
          textFieldProps={{ label: d.departamentoNacimiento }}
          onOptionSelect={handleOptionSelect}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        {!!depto && (
          <Autocomplete<Schema>
            name="municipioNacimiento"
            options={citiesQuery.data}
            loading={citiesQuery.isLoading}
            textFieldProps={{ label: d.municipioNacimiento }}
          />
        )}
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="celularPersona"
          label={d.telefonoCelular}
          format="phoneNumber"
        />
      </Grid>
      <Grid size={{ xs: 12 }}></Grid>
      <Divider sx={{ width: "100%" }} />
      <Grid sx={{ display: "flex", alignItems: "center" }} size={{ xs: 12 }}>
        <Typography>{d.DatosResidencia}:</Typography>
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="paisResidencia"
          options={paisQuery.data}
          loading={paisQuery.isLoading}
          textFieldProps={{ label: d.paisResidencia }}
        />
      </Grid>
      {paisResidencia === "Colombia" && (
        <>
          <>
            <Grid size={{ xs: 6 }}>
              <Autocomplete<Schema>
                name="departamentoResidencia"
                options={deptoResQuery.data}
                loading={deptoResQuery.isLoading}
                textFieldProps={{ label: d.departamentoResidencia }}
                onOptionSelect={handleOptionSelectRes}
              />
            </Grid>
            <Grid size={{ xs: 6 }}>
              {!!deptoRes && (
                <Autocomplete<Schema>
                  name="municipioResidencia"
                  options={citiesResQuery.data}
                  loading={citiesResQuery.isLoading}
                  textFieldProps={{ label: d.municipioResidencia }}
                />
              )}
            </Grid>
          </>
        </>
      )}
    </>
  );
};

export { DatosPersonaBasicos };
