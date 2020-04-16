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
    public class MapDatasController : ControllerBase
    {
        private readonly DB19Context _context;

        public MapDatasController(DB19Context context)
        {
            _context = context;
        }

        // GET: api/MapDatas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MapData>>> GetMapData()
        {
            return await _context.MapData.ToListAsync();
        }

        // GET: api/MapDatas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MapData>> GetMapData(int id)
        {
            var mapData = await _context.MapData.FindAsync(id);

            if (mapData == null)
            {
                return NotFound();
            }

            return mapData;
        }

        // PUT: api/MapDatas/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMapData(int id, MapData mapData)
        {
            if (id != mapData.Id)
            {
                return BadRequest();
            }

            _context.Entry(mapData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MapDataExists(id))
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

        // POST: api/MapDatas
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<MapData>> PostMapData(MapData mapData)
        {
            _context.MapData.Add(mapData);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMapData", new { id = mapData.Id }, mapData);
        }

        // DELETE: api/MapDatas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MapData>> DeleteMapData(int id)
        {
            var mapData = await _context.MapData.FindAsync(id);
            if (mapData == null)
            {
                return NotFound();
            }

            _context.MapData.Remove(mapData);
            await _context.SaveChangesAsync();

            return mapData;
        }

        private bool MapDataExists(int id)
        {
            return _context.MapData.Any(e => e.Id == id);
        }
    }
}
