using CoOp19.App.Models;
using CoOp19.Dtb;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CoOp19.App.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class HealthResourcesController : ControllerBase
  {
    [HttpGet]
    public async Task<IEnumerable<HealthViewResource>> GetHealthResources()
    {
      var output = new List<HealthViewResource>();
      using (var context = new DB19Context())
      {
        context.Users.Include("");
        foreach (var health in context.HealthResource)
        {
          using (var context2 = new DB19Context())
          {
            var gen = await context2.GenericResource.FindAsync(health.ResourceId);
            var map = await context2.MapData.FindAsync(gen.LocId);
            output.Add(new HealthViewResource(health, gen, map));
          }
        }
      }
      return output;
    }

    [HttpGet("{ID}")]
    public async Task<HealthViewResource> GetHealthResource(int id)
    {
      using (var context = new DB19Context())
      {
        var health = await context.HealthResource.FindAsync(id);
        var gen = await context.GenericResource.FindAsync(health.ResourceId);
        var map = await context.MapData.FindAsync(gen.LocId);
        return new HealthViewResource(health, gen, map);
      }
    }

    [HttpPost]
    [ProducesResponseType(201, Type = typeof(HealthViewResource))]
    [ProducesResponseType(400)]
    public async Task<ActionResult> PostAsync([FromBody] HealthViewResource health)
    {
      using (var context = new DB19Context())
      {
        var map = new Dtb.Entities.MapData
        {
          Gpsn = health.Gpsn,
          Gpsw = health.Gpsw,
          City = health.City,
          Address = health.Address,
          State = health.State
        };
        var gen = new Dtb.Entities.GenericResource
        {
          Loc = map,
          Name = health.Name,
          Description = health.Description
        };
        await context.HealthResource.AddAsync(new Dtb.Entities.HealthResource
        {
          ProvidesTests = health.ProvidesTests,
          TestPrice = health.TestPrice,
          Resource = gen
        });
        await context.SaveChangesAsync();
      }
      return Ok();
    }
  }
}
