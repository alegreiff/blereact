import { Schema } from "@/features/employee/personal-info/types/schema";
import {
  getTipoVinculacion, getCities,
  getStates,
} from "@/features/employee/personal-info/utils/api";
import { useQuery } from "@tanstack/react-query";

import { useFormContext } from "@/features/form/hooks/useFormContext";

import { useWatch } from "react-hook-form";
import { getPais } from "@/features/employee/datos-basicos/utils/api";

const useVinculacion = () => {
  return useQuery({
    queryKey: ["tipoVinculacion"],
    queryFn: getTipoVinculacion,
  });
};


const usePais = () => {
  return useQuery({
    queryKey: ["pais"],

    queryFn: getPais,
  });
};


const useStates = () => {
  return useQuery({
    queryKey: ["states"],

    queryFn: getStates,
  });
};
const useStatesRes = () => {
  return useQuery({
    queryKey: ["states"],

    queryFn: getStates,
  });
};

const useCities = () => {
  const { control } = useFormContext<Schema>();
  const state = useWatch({ control, name: "departamentoNacimiento" });

  return useQuery({
    queryKey: ["municipioNacimiento", { state }],
    queryFn: () => getCities(state),
  });
};

const useCitiesRes = () => {
  const { control } = useFormContext<Schema>();
  const state = useWatch({ control, name: "departamentoResidencia" }) || "";

  return useQuery({
    queryKey: ["municipioResidencia", { state }],
    queryFn: () => getCities(state),
  });
};

export { useVinculacion, useStates, useCities, usePais, useStatesRes, useCitiesRes }; 
