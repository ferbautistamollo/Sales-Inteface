"use server";

import { ResponseData } from "@/utils/interfaces";

export const getGroups = async (): Promise<ResponseData> => {
  try {
    // const response = await apiClient.GET(
    //   `beneficiaries/persons/${uuid}/details`,
    // );
    // const data = await response.json();

    // if (!response.ok) {
    //   return {
    //     error: true,
    //     message: "Ocurrió un error",
    //     data: response.statusText,
    //   };
    // }
    //TEST
    const data = {
      error: false,
      message: "Datos de los grupos obtenido exitosamente",
      data: [
        { id: 1, name: "Folders", shortened: "FO" },
        { id: 2, name: "Gastos Administrativos", shortened: "GA" },
        { id: 3, name: "Amortizaciones", shortened: "AM" },
        { id: 4, name: "Préstamos", shortened: "PR" },
        { id: 5, name: "Aportes", shortened: "AP" },
        { id: 6, name: "Beneficios Sociales", shortened: "BS" },
        { id: 7, name: "Otros", shortened: "OT" },
        { id: 8, name: "Gastos Administrativos", shortened: "a" },
        { id: 9, name: "Amortizaciones", shortened: "A3M" },
        { id: 10, name: "Préstamos", shortened: "P4R" },
        { id: 11, name: "Aportes", shortened: "AP1" },
        { id: 12, name: "Beneficios Sociales", shortened: "B2S" },
        { id: 13, name: "Otros", shortened: "O3T" },
        { id: 14, name: "Otros", shortened: "O3T1" },
        { id: 15, name: "Otros", shortened: "O3T2" },
      ],
    };

    return {
      error: data.error,
      message: data.message,
      data: data.data,
    };
  } catch (e: any) {
    return {
      error: true,
      message: "Error al obtener datos de los grupos",
      data: e.message,
    };
  }
};

export const getGroupProducts = async (): Promise<ResponseData> => {
  try {
    // const response = await apiClient.GET(
    //   `beneficiaries/persons/${uuid}/details`,
    // );
    // const data = await response.json();

    // if (!response.ok) {
    //   return {
    //     error: true,
    //     message: "Ocurrió un error",
    //     data: response.statusText,
    //   };
    // }
    //TEST
    const data = {
      error: false,
      message: "Productos del grupo obtenido exitosamente",
      data: [
        { id: 1, name: "Folders", code: "FO", price: 100 },
        { id: 2, name: "Gastos Administrativos", code: "GA", price: 200 },
        { id: 3, name: "Amortizaciones", code: "AM", price: 300 },
        { id: 4, name: "Préstamos", code: "PR", price: 400 },
        { id: 5, name: "Aportes", code: "AP", price: 500 },
        { id: 6, name: "Beneficios Sociales", code: "BS", price: 600 },
        { id: 7, name: "Otros", code: "OT", price: 700 },
        { id: 8, name: "Gastos Administrativos", code: "a", price: 800 },
        { id: 9, name: "Amortizaciones", code: "A3M", price: 900 },
        { id: 10, name: "Préstamos", code: "P4R", price: 1000 },
        { id: 11, name: "Aportes", code: "AP1", price: 1100 },
        { id: 12, name: "Beneficios Sociales", code: "B2S", price: 1200 },
        { id: 13, name: "Otros", code: "O3T", price: 1300 },
        { id: 14, name: "Otros", code: "O3T1", price: 1400 },
        { id: 15, name: "Otros", code: "O3T2", price: 1500 },
      ],
    };

    return {
      error: data.error,
      message: data.message,
      data: data.data,
    };
  } catch (e: any) {
    return {
      error: true,
      message: "Error al obtener datos de los grupos",
      data: e.message,
    };
  }
};
