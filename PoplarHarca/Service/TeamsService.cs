using PoplarHarca.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PoplarHarca.Models;

namespace PoplarHarca.Service
{
    public class TeamsService : ITeamsService
    {

        private ITeamsRepository _teamsRepository;

        public TeamsService( ITeamsRepository teamsRepository )
        {
            _teamsRepository = teamsRepository;
        }

        public IEnumerable<TeamListItem> GetTeamList()
        {

            var result = new List<TeamListItem>();

            _teamsRepository
                .GetTeams()
                .ForEach( x => result.Add( new TeamListItem { 
                     IdTeam = x.IdTeam,
                      StrTeam = x.StrTeam
                } ) );

            return result.ToArray();

        }

    }
}
