using PoplarHarca.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoplarHarca.Repository
{
    public interface ITeamsRepository : IRepository<FootballTeams>
    {

        List<Team> GetTeams();

        Team GetTeam(int id);

    }
}
