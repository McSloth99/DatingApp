using System;

namespace API.Errors;

public class ApiExceptions(int statusCode, string message, string? details)
{
    public int DtatusCode { get; set; } = statusCode;
    public string Message { get; set; } = message;
    public string? Details { get; set; } = details;
}

