"use server";

import { ResponseData } from "@/utils/interfaces";
import { apiClient } from "@/services";

export const getForCreatingSale = async (
  personUuid: string,
): Promise<ResponseData> => {
  try {
    const response = await apiClient.GET(`sales/${personUuid}/forCreatingSale`);
    const data = await response.json();

    if (!response.ok) {
      return {
        error: true,
        message: "Ocurrió un error",
        data: response.statusText,
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

export const getGroupProducts = async (
  groupId: string,
): Promise<ResponseData> => {
  try {
    const response = await apiClient.GET(`sales/groups/${groupId}/products`);
    const data = await response.json();

    if (!response.ok) {
      return {
        error: true,
        message: "Ocurrió un error",
        data: response.statusText,
      };
    }

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

export const getPaymentTypes = async (): Promise<ResponseData> => {
  try {
    const response = await apiClient.GET(`sales/paymentTypes`);
    const data = await response.json();

    if (!response.ok) {
      return {
        error: true,
        message: "Ocurrió un error",
        data: response.statusText,
      };
    }

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

export const postCreateSale = async (body: any): Promise<ResponseData> => {
  try {
    console.log(body);
    const response = await apiClient.POST(`sales/createSale`, body, true);
    const data = await response.json();

    if (!response.ok) {
      return {
        message: "Ocurrió un error",
        error: true,
        data: response.statusText,
      };
    }

    return {
      error: data.error,
      message: data.message,
      data: data.data,
    };
  } catch (e: any) {
    return {
      error: true,
      message: "Error al crear la venta",
      data: e.message,
    };
  }
};

export const postGenerateQr = async (body: any): Promise<ResponseData> => {
  try {
    const response = await apiClient.POST(`sales/generateQr`, body, true);
    const data = await response.json();

    if (!response.ok) {
      return {
        error: true,
        message: "Ocurrió un error",
        data: response.statusText,
      };
    }

    return {
      error: data.error,
      message: data.message,
      data: data.data,
    };
  } catch (e: any) {
    return {
      error: true,
      message: "Error al crear la venta",
      data: e.message,
    };
  }
};

export const getSalesRecords = async (
  personId: string,
): Promise<ResponseData> => {
  try {
    const response = await apiClient.GET(
      `beneficiaries/persons/records/${personId}`,
    );
    const data = await response.json();

    if (!response.ok) {
      return {
        error: true,
        message: "Ocurrió un error al obtener el historial de modificaciones",
        data: response.statusText,
      };
    }

    return {
      error: data.error,
      message: data.message,
      data: data.data,
    };
  } catch (e: any) {
    console.error(e);

    return {
      error: true,
      message: "Error al obtener historial de modificaciones",
      data: e.message,
    };
  }
};


export const getPersonSales = async (personId: string): Promise<ResponseData> => {
  try {
    const response = await apiClient.GET(`sales/${personId}`);
    const data = await response.json();

    if (!response.ok) {
      return {
        error: true,
        message: "Ocurrió un error",
        data: response.statusText,
      };
    }

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