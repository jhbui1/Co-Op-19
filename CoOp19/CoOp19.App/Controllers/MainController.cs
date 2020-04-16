using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CoOp19.Dtb;

namespace CoOp19.App.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MainController : ControllerBase
    {

        private readonly ILogger<MainController> _logger;

        public MainController(ILogger<MainController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<MapData> Get()
        {
      var output = new List<MapData>();
      using (var context = new DB19Context())
      {
        foreach (var item in context.MapData)
        {
          output.Add(new MapData
          {
            gpsn = item.Gpsn ?? default,
            gpsw = item.Gpsw ?? default,
            ID = item.Id,
            address = item.Address,
            city = item.City,
            state = item.State
          });
          
        }

        return output;
      }
        }
    }
}
