using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoOp19.App.Models
{
  public class ShelterViewResource
  {
    public int Id { get; set; }
    public int ResourceId { get; set; }
    public int Vacancy { get; set; }
    public byte Rating { get; set; }
    public bool IsSafe { get; set; }
    public decimal? Gpsn { get; set; }
    public decimal? Gpsw { get; set; }
    public string City { get; set; }
    public string Address { get; set; }
    public string State { get; set; }
  }
}
