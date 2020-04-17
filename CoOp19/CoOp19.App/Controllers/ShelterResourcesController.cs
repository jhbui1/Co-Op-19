using CoOp19.App.Models;
using CoOp19.Dtb;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CoOp19.App.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class ShelterResourcesController : ControllerBase
  {
    [HttpGet]
    public async Task<IEnumerable<ShelterViewResource>> GetActionAsync()
    {
      var output = new List<ShelterViewResource>();
      using (var context = new DB19Context())
      {
        foreach (var shelt in context.ShelterResource)
        {
          using (var context2 = new DB19Context())
          {
            var gen = await context2.GenericResource.FindAsync(shelt.ResourceId);
            var map = await context2.MapData.FindAsync(shelt.ResourceId);
            output.Add(new ShelterViewResource(map, shelt,gen));
          }
        }
      }
      return output;
    }

    [HttpGet("{ID}")]
    public async Task<ShelterViewResource> GetOneActionAsync(int id)
    {
      using (var context = new DB19Context())
      {
        var shelt = await context.ShelterResource.FindAsync(id);
        var gen = await context.GenericResource.FindAsync(shelt.ResourceId);
        var map = await context.MapData.FindAsync(shelt.ResourceId);
        return new ShelterViewResource(map, shelt, gen);
      }
    }
  }
}
