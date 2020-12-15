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

        public TeamsRepository( IHttpClientFactory clientFactory ) : base( clientFactory )
        {
            ClientName = "thesportsdb";
            GZip = false;

            if ( !_teams.Any() )
            {
                var footballTeams = Get().GetAwaiter().GetResult();
                _teams = footballTeams.Teams;
            }

        }

        public List<Team> GetTeams() 
            => _teams;

        public Team GetTeam( int id ) 
            => _teams.FirstOrDefault( x => x.IdTeam == id );


    }
}
