using Api.Database;
using Api.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

[ApiController]
[Route("[controller]")]
public class TestController : ControllerBase
{
    private readonly ILogger<TestController> _logger;

    private readonly IDataBase _db;

    public TestController(ILogger<TestController> logger, IDataBase db)
    {
        _db = db;
        _logger = logger;
    }

    [HttpGet]
    [Route("/Test")]
    public string GetAll()
    {
        return JsonConvert.SerializeObject(_db.GetTests());
    }
}