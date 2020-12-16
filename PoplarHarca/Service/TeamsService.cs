using PoplarHarca.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PoplarHarca.Models;
using AutoMapper;
using AutoMapper.QueryableExtensions;

namespace PoplarHarca.Service
{
    public class TeamsService : ITeamsService
    {

        private ITeamsRepository _teamsRepository;

        private readonly IConfigurationProvider _mappingConfig;

        public TeamsService( ITeamsRepository teamsRepository, IConfigurationProvider mappingConfig )
        {
            _teamsRepository = teamsRepository;
            _mappingConfig = mappingConfig;
        }

        public IEnumerable<TeamListItem> GetTeamList()
        {

            

           return _teamsRepository
                .GetTeams()
                .AsQueryable()
                .ProjectTo<TeamListItem>( _mappingConfig )
                .ToList();

            //var results = new List<TeamListItem>();

            //_teamsRepository
            //    .GetTeams()
            //    .ForEach( x => results.Add( new TeamListItem
            //    {
            //        IdTeam = x.IdTeam,
            //        StrTeam = x.StrTeam
            //    } ) );

            //return results;            


        }

        public Team GetTeam(int id)
        {
            return _teamsRepository.GetTeam( id );
        }


    }
}
