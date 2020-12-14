using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PoplarHarca.Service;
using PoplarHarca.Models;

namespace PoplarHarca.Controllers
{
    [ApiController]
    [Route( "[controller]" )]
    public class TeamsController : Controller
    {

        private ITeamsService _teamsService;
        public TeamsController( ITeamsService  teamsService )
        {
            _teamsService = teamsService;
        }

        [HttpGet]
        [Route( "GetTeamList" )]
        public IEnumerable<TeamListItem> GetTeamList() 
            => _teamsService.GetTeamList();

        [HttpGet]
        [Route( "GetTeam/{id}" )]
        public Team GetTeam( int id ) 
            => _teamsService.GetTeam( id );

    }
}
