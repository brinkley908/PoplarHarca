using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace PoplarHarca.Repository
{
    public interface IRepository<TEntity> where TEntity : class
    {

        Task<TEntity> Get();
     
    }
}
