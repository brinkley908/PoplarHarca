using PoplarHarca.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace PoplarHarca.Repository
{
    public class TeamsRepository : RepositoryBase<FootballTeams>, ITeamsRepository
    {


        private static List<Team> _teams = new List<Team>();

        public TeamsRepository( IHttpClientFactory clientFactory ):base(clientFactory)
        {
            ClientName = "teamsapi";
            GZip = false;
        }

        public async Task<List<Team>> GetTeams()
        {

            if ( !_teams.Any() )
            {
                var footballTeams = await Get();
                _teams = footballTeams.Teams;
            }

            return _teams;
        }

        public Team GetTeam( int id )
        {
            return _teams
                .FirstOrDefault( x => x.IdTeam == id );
        }

      
    }
}
