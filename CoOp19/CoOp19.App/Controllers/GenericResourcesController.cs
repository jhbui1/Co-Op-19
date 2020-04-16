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
    public class GenericResourcesController : ControllerBase
    {
        private readonly DB19Context _context;

        public GenericResourcesController(DB19Context context)
        {
            _context = context;
        }

        // GET: api/GenericResources
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GenericResource>>> GetGenericResource()
        {
            return await _context.GenericResource.ToListAsync();
        }

        // GET: api/GenericResources/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GenericResource>> GetGenericResource(int id)
        {
            var genericResource = await _context.GenericResource.FindAsync(id);

            if (genericResource == null)
            {
                return NotFound();
            }

            return genericResource;
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
