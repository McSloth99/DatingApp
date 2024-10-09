using System;

namespace API.DTOs;

public class UserDto
{
    public required string Username { get; set; }

    public string Token { get; set; }
}
