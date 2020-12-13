using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PoplarHarca.Repository;
using PoplarHarca.Models;

namespace PoplarHarca.Controllers
{
    [ApiController]
    [Route( "[controller]" )]
    public class TeamsController : Controller
    {

        private ITeamsRepository _teamsRepository;
        public TeamsController( ITeamsRepository teamsRepository )
        {
            _teamsRepository = teamsRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Team>> Get()
        {
            await _teamsRepository.GetTeams();
            return null;
        }
    }
}
