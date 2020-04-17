using CoOp19.App.Models;
using CoOp19.Dtb;
using CoOp19.Dtb.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CoOp19.App.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {
    // GET: api/Users
    [HttpGet]
    public ActionResult<IEnumerable<UsersView>> GetUsers()
    {
      var output = new List<UsersView>();
      using (var context = new DB19Context())
      {
        foreach (var user in context.Users)
        {
          using (var context2 = new DB19Context())
          {
            var map = context2.MapData.Find(user.Loc);
            output.Add(new UsersView(map, user));
          }
        }
        return Ok(output);
      }
    }

    [HttpGet("{ID}")]
    public async Task<UsersView> GetUserAsync(int id)
    {
      using (var context = new DB19Context())
      {
        var user = await context.Users.FindAsync(id);
        using (var context2 = new DB19Context())
        {
          var map = await context2.MapData.FindAsync(user.Loc);
          return new UsersView(map, user);
        }
      }
    }
  }
}
