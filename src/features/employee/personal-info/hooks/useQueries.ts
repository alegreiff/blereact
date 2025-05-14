import { Schema } from "@/features/employee/personal-info/types/schema";
import {
  getCities,
  getStates,
  getCasos, getTiposPersona, getTipoVinculacion
} from "@/features/employee/personal-info/utils/api";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { useQuery } from "@tanstack/react-query";
import { useWatch } from "react-hook-form";


const useVinculacion = () => {
  return useQuery({
    queryKey: ["tipoVinculacion"],
    queryFn: getTipoVinculacion,
  });
};


const useStates = () => {
  return useQuery({
    queryKey: ["states"],
    queryFn: getStates,
  });
};


const useCasos = () => {
  return useQuery({
    queryKey: ["casos"],
    queryFn: getCasos,
  });
};

const useTiposPersona = () => {
  return useQuery({
    queryKey: ["tipoPersona"],
    queryFn: getTiposPersona,
  });
};



const useCities = () => {
  const { control } = useFormContext<Schema>();
  const state = useWatch({ control, name: "state" });

  return useQuery({
    queryKey: ["cities", { state }],
    queryFn: () => getCities(state),
  });
};

export { useStates, useCities, useCasos, useTiposPersona, useVinculacion };
