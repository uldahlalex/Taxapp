using System.Net.Http.Json;
using FluentAssertions;
using Newtonsoft.Json;

namespace testDir;

public class Tests
{
    private HttpClient _httpClient;

    [SetUp]
    public void Setup()
    {
        _httpClient = new HttpClient();
    }

    [TestCase("http://localhost:5000/FalseTaxiPrice/3,5,1", 99)]
    [TestCase("http://localhost:5000/DefinitelyNotATaxaPrice/6,10,2", 295)]
    public async Task Test1(string address, int expected)
    {
        //Arrange
        //ACT
        var answer = await _httpClient.GetStringAsync(address);
        
        //ASSERT
        int.Parse(answer).Should().Be(expected);
    }
}

class Response
{
    public int? ExpectedResponse { get; set; }
}