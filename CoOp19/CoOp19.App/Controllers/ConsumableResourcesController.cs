using CoOp19.App.Models;
using CoOp19.Dtb;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CoOp19.App.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class ConsumableResourcesController : ControllerBase
  {
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ConsumableViewResource>>> GetActionAsync()
    {
      var output = new List<ConsumableViewResource>();
      using (var context = new DB19Context())
      {
        foreach (var consume in context.ConsumableResource)
        {
          using (var context2 = new DB19Context())
          {
            var gen = await context2.GenericResource.FindAsync(consume.ResourceId);
            var map = await context2.MapData.FindAsync(gen.LocId);
            output.Add(new ConsumableViewResource(map,gen,consume));
          }
        }
      }
      return output;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ConsumableViewResource>> GetActionAsync(int id)
    {
      using (var context = new DB19Context())
      {
        var consume = await context.ConsumableResource.FindAsync(id);
        var gen = await context.GenericResource.FindAsync(consume.ResourceId);
        var map = await context.MapData.FindAsync(gen.LocId);
        return new ConsumableViewResource(map, gen, consume);
      }
    }

    [HttpPost]
    [ProducesResponseType(201, Type = typeof(ConsumableViewResource))]
    [ProducesResponseType(400)]
    public async Task Post([FromBody] ConsumableViewResource consume)
    {
      using (var context = new DB19Context())
      {
        await context.ConsumableResource.AddAsync(new Dtb.Entities.ConsumableResource
        {
          ResourceId = consume.ResourceId,
          Price = consume.Price,
          Quantity = consume.Quantity
          ,RecName = consume.RecName
        });
        await context.SaveChangesAsync();
      }
    }
  }
}
