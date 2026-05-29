"use server";

import { apiClient } from "@/services";
import { ResponseData } from "@/utils/interfaces";

export const getPerson = async (uuid: string): Promise<ResponseData> => {
  try {
    const response = await apiClient.GET(
      `beneficiaries/persons/${uuid}/details`,
    );
    const data = await response.json();

    if (!response.ok) {
      return {
        error: true,
        message: "Ocurrió un error",
        data: response.statusText,
      };
    }

    return {
      error: false,
      message: "Datos de la persona obtenido exitosamente",
      data,
    };
  } catch (error: any) {
    return {
      error: true,
      message: "Error al obtener datos de la persona: " + error.message,
      data: error.message,
    };
  }
};

export const searchPerson = async (value: string, type: string) => {
  try {
    const response = await apiClient.GET(`sales/search/${value}/${type}`);

    const data = await response.json();

    if (!response.ok) {
      return {
        error: true,
        message: "Ocurrió un error al buscar a la persona",
      };
    }

    return {
      error: data.error,
      message: data.message,
      data: data.data,
    };
  } catch (error: any) {
    return {
      error: true,
      message: "Error al buscar a la persona: " + error.message,
    };
  }
};
