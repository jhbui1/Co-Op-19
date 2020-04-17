using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoOp19.Dtb;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace CoOp19.App
{
    public class Startup
    {
    readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
        services.AddCors(options =>
        {
          options.AddPolicy(name: MyAllowSpecificOrigins,
                              builder =>
                              {
                                builder.WithOrigins("https://co-op19.azurewebsites.net",
                                                    "https://co-op19.azurewebsites.net/register",
                                                    "http://localhost:4200/register",
                                                    "http://localhost:4200"
                                                    )
                                                    .AllowAnyHeader()
                                                    .AllowAnyMethod();
                              });
        });

        services.AddDbContext<DB19Context>(options =>
           options.UseSqlServer(Configuration.GetConnectionString("DB19Context")));
           services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(
              options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
            );

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
