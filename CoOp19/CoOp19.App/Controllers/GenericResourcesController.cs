using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoOp19.Dtb;
using CoOp19.Dtb.Entities;
using CoOp19.App.Models;

namespace CoOp19.App.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class GenericResourcesController : ControllerBase
  {
    [HttpGet]
    public async Task<IEnumerable<GenericViewResource>> GetHealthResources()
    {
      var output = new List<GenericViewResource>();
      using (var context = new DB19Context())
      {
        foreach (var gen in context.GenericResource)
        {
          using (var context2 = new DB19Context())
          {
            var map = await context2.MapData.FindAsync(gen.LocId);
            output.Add(new GenericViewResource(map, gen));
          }
        }
      }
      return output;
    }

    public List<ConsumableResource> GetProducts(int id)
    {
      using (var context = new DB19Context())
      {
        var output = new List<ConsumableResource>();
        foreach (var item in context.ConsumableResource)
        {
          if (item.ResourceId == id)
          {
            output.Add(item);
          }
        }
        return output;
      }
    }

    [HttpGet("{ID}")]
    public async Task<GenericViewResource> GetHealthResource(int id)
    {
      using (var context = new DB19Context())
      {
        var gen = await context.GenericResource.FindAsync(id);
        var map = await context.MapData.FindAsync(gen.LocId);
        var output = new GenericViewResource(map, gen);
        output.ConsumableResources = GetProducts(id);
        return output;
      }
    }

    [HttpPost]
    [ProducesResponseType(201, Type = typeof(GenericViewResource))]
    [ProducesResponseType(400)]
    public async Task<ActionResult> PostAsync([FromBody] GenericViewResource gen)
    {
      using (var context = new DB19Context())
      {
        var map = new Dtb.Entities.MapData
        {
          Gpsn = gen.Gpsn,
          Gpsw = gen.Gpsw,
          City = gen.City,
          Address = gen.Address,
          State = gen.State
        };
        await context.AddAsync(new Dtb.Entities.GenericResource
        {
          Loc = map,
          Name = gen.Name,
          Description = gen.Description
        });
        await context.SaveChangesAsync();
      }
      return Ok();
    }
  }
}
