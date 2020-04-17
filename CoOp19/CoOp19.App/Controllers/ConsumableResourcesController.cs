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
  [Route("api/[controller]")]
  [ApiController]
  public class ConsumableResourcesController : ControllerBase
  {
    private readonly DB19Context _context;


    public ConsumableViewResourcesController(DB19Context context)
    {
      _context = context;
    }
    [HttpGet]
    public async Task<IEnumerable<ConsumableViewResource>> GetActionAsync()
    {
      var output = new List<ConsumableViewResource>();
      using (var context = new DB19Context())
      {
        foreach (var consumable in context.ConsumableResource)
        {
          using (var context2 = new DB19Context())
          {
            var generic = await context2.GenericResource.FindAsync(consumable.ResourceId);
            var map = await context2.MapData.FindAsync(generic.ResourceId);
            output.Add(new ConsumableViewResource(map, consumable,generic));
          }
        }
      }
      return output;
    }
    [HttpGet("{ID}")]
    public async Task<ConsumableViewResource> GetOneActionAsync(int id)
    {
      using (var context = new DB19Context())
      {
        var consumable = await context.ConsumableResource.FindAsync(id);
        var generic = await context.GenericResource.FindAsync(consumable.ResourceId);
        var map = await context.MapData.FindAsync(generic.ResourceId);
        return new ShelterViewResource(map, consumable, generic);
      }
    }

    [HttpPost]
    [Consumes("application/xml")] // this action method won't accept JSON as input, only XML
    [ProducesResponseType(201, Type = typeof(ConsumableViewResource))]
    [ProducesResponseType(400)]
    public async Task<ActionResult<ConsumableResource>> PostAsync([FromBody] ConsumableViewResource consumableResource)
    {
      using (var context = new DB19Context())
      {
        var map = new Dtb.Entities.MapData
          {
            Gpsn = consumableResource.Gpsn,
            Gpsw = consumableResource.Gpsw,
            City = consumableResource.City,
            Address = consumableResource.Address,
            State = consumableResource.State
          };
        await context.ConsumableResource.AddAsync(new Dtb.Entities.ConsumableResource
            {
              Price = consumableResource.Price,
              Quantity = consumableResource.Quantity,
              LocNavigation = map
            });
      }
      return Ok();
    }


    // PUT: api/ConsumableResources/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutConsumableResource(int id, ConsumableResource consumableResource)
    {
      if (id != consumableResource.Id)
      {
        return BadRequest();
      }

      _context.Entry(consumableResource).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ConsumableResourceExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // DELETE: api/ConsumableResources/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<ConsumableResource>> DeleteConsumableResource(int id)
    {
      var consumableResource = await _context.ConsumableResource.FindAsync(id);
      if (consumableResource == null)
      {
        return NotFound();
      }

      _context.ConsumableResource.Remove(consumableResource);
      await _context.SaveChangesAsync();

      return consumableResource;
    }

    private bool ConsumableResourceExists(int id)
    {
      return _context.ConsumableResource.Any(e => e.Id == id);
    }
  }
}
