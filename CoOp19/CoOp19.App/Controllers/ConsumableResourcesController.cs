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
  public class ConsumableViewResourcesController : ControllerBase
  {
    private readonly DB19Context _context;


    public ConsumableViewResourcesController(DB19Context context)
    {
      _context = context;
    }
    [HttpGet]
    /*public IEnumerable<ConsumableViewResource> Get()
    {
      var output = new List<ConsumableViewResource>();
      using (var context = new DB19Context())
      {
        foreach (var consumable in context.ConsumableResource)
        {
          output.Add(new ConsumableViewResource
          {

          });
        }
      }
    }*/

    // GET: api/ConsumableViewResources
    /*[HttpGet]
    public async Task<ActionResult<IEnumerable<ConsumableViewResource>>> GetConsumableViewResource()
    {
      var output = new List<ConsumableViewResource>();
      using (var context = new DB19Context())
      {
        foreach (var Consumable in context.ConsumableResource)
        {
          using (var context2 = new DB19Context())
          {
            var map = context2.MapData.Find(ConsumableResource.);
            output.Add(new ConsumableViewResource(map, Consumable));
          }
        }
        return Ok(output);
      }
    }*/
    [HttpPost]
    [Consumes("application/xml")] // this action method won't accept JSON as input, only XML
    [ProducesResponseType(201, Type = typeof(ConsumableViewResource))]
    [ProducesResponseType(400)]
    public async Task<ActionResult<ConsumableResource>> PostConsumableResourceAsync(ConsumableResource consumableResource)
    {
      using (var context = new DB19Context())
      {
        await context.ConsumableResource.AddAsync(consumableResource);
      }
      return Ok();
    }

    // GET: api/ConsumableResources/5
    [HttpGet("{id}")]
    public async Task<ActionResult<ConsumableResource>> GetConsumableResource(int id)
    {
      var consumableResource = await _context.ConsumableResource.FindAsync(id);


      if (consumableResource == null)
      {
        return NotFound();
      }

      return consumableResource;
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

    // POST: api/ConsumableResources
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<ConsumableResource>> PostConsumableResource(ConsumableResource consumableResource)
    {
      _context.ConsumableResource.Add(consumableResource);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetConsumableResource", new { id = consumableResource.Id }, consumableResource);
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
