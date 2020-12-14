using PoplarHarca.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoplarHarca.Service
{
    public interface ITeamsService
    {
        IEnumerable<TeamListItem> GetTeamList();

        Team GetTeam( int id );
    }
}
