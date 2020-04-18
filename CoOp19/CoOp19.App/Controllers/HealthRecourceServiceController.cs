using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoOp19.App.Models;
using CoOp19.Dtb;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoOp19.App.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class HealthRecourceServiceController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HealthViewResourceService>>> Get()
        {
      var output = new List<HealthViewResourceService>();
      using (var context = new DB19Context())
      {
        foreach (var serv in context.HealthResourceServices)
        {
          using (var context2 = new DB19Context())
          {
            var health = await context2.HealthResource.FindAsync(serv.RecourceId);
            var gen = await context2.GenericResource.FindAsync(health.ResourceId);
            var map = await context2.MapData.FindAsync(gen.LocId);
            output.Add(new HealthViewResourceService(serv, health, gen, map));
          }
        }
        return output;
      }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<HealthViewResourceService>> Get(int id)
    {
      using (var context = new DB19Context())
      {
        var serv = await context.HealthResourceServices.FindAsync(id);
        var health = await context.HealthResource.FindAsync(serv.RecourceId);
        var gen = await context.GenericResource.FindAsync(health.ResourceId);
        var map = await context.MapData.FindAsync(gen.LocId);
        return new HealthViewResourceService(serv, health, gen, map);
      }
    }

        [HttpPost]
    [ProducesResponseType(201, Type = typeof(HealthViewResourceService))]
    [ProducesResponseType(400)]
    public async Task Post([FromBody] HealthViewResourceService serv)
        {
      using (var context = new DB19Context())
      {
        await context.HealthResourceServices.AddAsync(new Dtb.Entities.HealthResourceServices
        {
          ServiceDesc = serv.ServiceDesc,
          ServiceName = serv.ServiceName,
          AvgWaitHours = serv.AvgWaitHours,
          EstCost = serv.EstCost,
          RecourceId = serv.ResourceId
        });
        await context.SaveChangesAsync();
      }
        }
    }
}
