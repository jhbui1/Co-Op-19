using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoOp19.Dtb;
using CoOp19.Dtb.Entities;

namespace CoOp19.App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShelterResourcesController : ControllerBase
    {
        private readonly DB19Context _context;

        public ShelterResourcesController(DB19Context context)
        {
            _context = context;
        }

        // GET: api/ShelterResources
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShelterResource>>> GetShelterResource()
        {
            return await _context.ShelterResource.ToListAsync();
        }

        // GET: api/ShelterResources/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ShelterResource>> GetShelterResource(int id)
        {
            var shelterResource = await _context.ShelterResource.FindAsync(id);

            if (shelterResource == null)
            {
                return NotFound();
            }

            return shelterResource;
        }

        // PUT: api/ShelterResources/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShelterResource(int id, ShelterResource shelterResource)
        {
            if (id != shelterResource.Id)
            {
                return BadRequest();
            }

            _context.Entry(shelterResource).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShelterResourceExists(id))
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

        // POST: api/ShelterResources
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<ShelterResource>> PostShelterResource(ShelterResource shelterResource)
        {
            _context.ShelterResource.Add(shelterResource);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetShelterResource", new { id = shelterResource.Id }, shelterResource);
        }

        // DELETE: api/ShelterResources/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ShelterResource>> DeleteShelterResource(int id)
        {
            var shelterResource = await _context.ShelterResource.FindAsync(id);
            if (shelterResource == null)
            {
                return NotFound();
            }

            _context.ShelterResource.Remove(shelterResource);
            await _context.SaveChangesAsync();

            return shelterResource;
        }

        private bool ShelterResourceExists(int id)
        {
            return _context.ShelterResource.Any(e => e.Id == id);
        }
    }
}
