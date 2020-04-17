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
  public class GenericViewResourcesController : ControllerBase
  {
    private readonly DB19Context _context;

    public GenericViewResourcesController(DB19Context context)
    {
      _context = context;
    }

    // GET: api/GenericResources
    [HttpGet]  
    public async Task<ActionResult<IEnumerable<GenericViewResource>>> GetGenericViewResource()
    {
      var output = new List<GenericViewResource>();
      using (var context = new DB19Context())
      {
        foreach (var Generic in context.GenericResource)
        {
          using (var context2 = new DB19Context())
          {
            var map = context2.MapData.Find(GenericResource.Loc);
            output.Add(new GenericViewResource(map, Generic));
          }
        }
        return Ok(output);
      }
    }
    [HttpGet("{ID}")]
    public async Task<GenericViewResource> GetOneActionAsync(int id)
    {
      using (var context = new DB19Context())
      {
        var generic = await context.GenericResource.FindAsync(id);
        var map = await context.MapData.FindAsync(generic.ResourceId);
        return new GenericViewResource(map, generic);
      }
    }
    [HttpPost]
    [Consumes("application/xml")] // this action method won't accept JSON as input, only XML
    [ProducesResponseType(201, Type = typeof(GenericViewResource))]
    [ProducesResponseType(400)]
    public async Task<ActionResult<GenericResource>> PostGenericResourceAsync(GenericViewResource genericResource)
    {
      using (var context = new DB19Context())
      {
        var map = new Dtb.Entities.MapData
        {
          Gpsn = genericResource.Gpsn,
          Gpsw = genericResource.Gpsw,
          City = genericResource.City,
          Address = genericResource.Address,
          State = genericResource.State
        };
        await context.GenericResource.AddAsync(new Dtb.Entities.GenericResource
          {
              Name = genericResource.Name,
              Description = genericResource.Description,
              LocNavigation = map,
          });
      }
      return Ok();
    }

    // PUT: api/GenericResources/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutGenericResource(int id, GenericResource genericResource)
    {
      if (id != genericResource.Id)
      {
        return BadRequest();
      }

      _context.Entry(genericResource).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!GenericResourceExists(id))
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

    // POST: api/GenericResources
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<GenericResource>> PostGenericResource(GenericResource genericResource)
    {
      _context.GenericResource.Add(genericResource);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetGenericResource", new { id = genericResource.Id }, genericResource);
    }

    // DELETE: api/GenericResources/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<GenericResource>> DeleteGenericResource(int id)
    {
      var genericResource = await _context.GenericResource.FindAsync(id);
      if (genericResource == null)
      {
        return NotFound();
      }

      _context.GenericResource.Remove(genericResource);
      await _context.SaveChangesAsync();

      return genericResource;
    }

    private bool GenericResourceExists(int id)
    {
      return _context.GenericResource.Any(e => e.Id == id);
    }
  }
}
