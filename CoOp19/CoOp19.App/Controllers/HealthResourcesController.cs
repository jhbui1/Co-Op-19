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
    public class HealthResourcesController : ControllerBase
    {
        private readonly DB19Context _context;

        public HealthResourcesController(DB19Context context)
        {
            _context = context;
        }

        // GET: api/HealthResources
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HealthResource>>> GetHealthResource()
        {
            return await _context.HealthResource.ToListAsync();
        }

        // GET: api/HealthResources/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HealthResource>> GetHealthResource(int id)
        {
            var healthResource = await _context.HealthResource.FindAsync(id);

            if (healthResource == null)
            {
                return NotFound();
            }

            return healthResource;
        }

        // PUT: api/HealthResources/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHealthResource(int id, HealthResource healthResource)
        {
            if (id != healthResource.Id)
            {
                return BadRequest();
            }

            _context.Entry(healthResource).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HealthResourceExists(id))
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

        // POST: api/HealthResources
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<HealthResource>> PostHealthResource(HealthResource healthResource)
        {
            _context.HealthResource.Add(healthResource);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHealthResource", new { id = healthResource.Id }, healthResource);
        }

        // DELETE: api/HealthResources/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<HealthResource>> DeleteHealthResource(int id)
        {
            var healthResource = await _context.HealthResource.FindAsync(id);
            if (healthResource == null)
            {
                return NotFound();
            }

            _context.HealthResource.Remove(healthResource);
            await _context.SaveChangesAsync();

            return healthResource;
        }

        private bool HealthResourceExists(int id)
        {
            return _context.HealthResource.Any(e => e.Id == id);
        }
    }
}
