import { HttpParams, HttpResponse } from "@angular/common/http";
import { PaginatedResults } from "../_models/Pagination";
import { signal } from "@angular/core";

export function setPaginatedReponse<T>(response: HttpResponse<T>, 
    paginatedResultsSignal: ReturnType<typeof signal<PaginatedResults<T> | null>>) {
    paginatedResultsSignal.set({
      items: response.body as T,
      pagination: JSON.parse(response.headers.get('Pagination')!)
    })
  }

export function setPaginationHeaders(pageNumber: number, pageSize: number) {
    let params = new HttpParams();

    if (pageNumber && pageSize){
      params = params.append('pageNumber', pageNumber);
      params = params.append('pageSize', pageSize);
    }

    return params;
  }