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
    public class ConsumableResourcesController : ControllerBase
    {
        private readonly DB19Context _context;

        public ConsumableResourcesController(DB19Context context)
        {
            _context = context;
        }

        // GET: api/ConsumableResources
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ConsumableResource>>> GetConsumableResource()
        {
            return await _context.ConsumableResource.ToListAsync();
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
