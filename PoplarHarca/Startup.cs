using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PoplarHarca.Repository;
using System;

namespace PoplarHarca
{
    public class Startup
    {
        public Startup( IConfiguration configuration )
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices( IServiceCollection services )
        {


            string teamsEnpoint = Configuration.GetSection( "TeamsEnpoint" ).Value;


            services.AddHttpClient( "teamsapi", c => {

                c.BaseAddress = new Uri( teamsEnpoint );
                // Github API versioning
                c.DefaultRequestHeaders.Add( "Accept", "application/x-www-form-urlencoded" );
                // Github requires a user-agent
                c.DefaultRequestHeaders.Add( "User-Agent", "TravelX Api" );

            } );

            services.AddScoped( typeof( IRepository<> ), typeof( RepositoryBase<> ) )
                    .AddScoped<ITeamsRepository, TeamsRepository>();

            services.AddControllersWithViews();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles( configuration =>
             {
                 configuration.RootPath = "ClientApp/build";
             } );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure( IApplicationBuilder app, IWebHostEnvironment env )
        {
            if ( env.IsDevelopment() )
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler( "/Error" );
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseEndpoints( endpoints =>
             {
                 endpoints.MapControllerRoute(
                     name: "default",
                     pattern: "{controller}/{action=Index}/{id?}" );
             } );

            app.UseSpa( spa =>
             {
                 spa.Options.SourcePath = "ClientApp";

                 if ( env.IsDevelopment() )
                 {
                     spa.UseReactDevelopmentServer( npmScript: "start" );
                 }
             } );
        }
    }
}