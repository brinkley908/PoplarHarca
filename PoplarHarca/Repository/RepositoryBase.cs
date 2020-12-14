using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Linq.Expressions;
using System.Net.Http;
using System.Threading.Tasks;

namespace PoplarHarca.Repository
{
    public class RepositoryBase<TEntity> : IRepository<TEntity> where TEntity : class
    {

        public string ClientName { get; set; }
        public string RequestParams { get; set; }
        public bool GZip { get; set; } = true;

        public readonly IHttpClientFactory _clientFactory;

        public RepositoryBase( IHttpClientFactory clientFactory )
        {
            _clientFactory = clientFactory;
        }


        public async Task<TEntity> Get()
        {
            using var request = new HttpRequestMessage( HttpMethod.Get, RequestParams );

            if ( GZip )
                request.Headers.Add( "Accept-Encoding", "gzip, deflate, br" );

            using var client = _clientFactory.CreateClient( ClientName );

            using var response = await client.SendAsync( request );

            string json;

            if ( response.IsSuccessStatusCode )
            {
                    using var stream = await response.Content.ReadAsStreamAsync();
                    if ( GZip )
                    {
                        using var gZstream = new GZipStream( stream, CompressionMode.Decompress );
                        using var reader = new StreamReader( gZstream, System.Text.Encoding.UTF8 );
                        json = reader.ReadToEnd();
                    }
                    else
                    {
                        using var reader = new StreamReader( stream, System.Text.Encoding.UTF8 );
                        json = reader.ReadToEnd();
                    }

                return Newtonsoft.Json.JsonConvert.DeserializeObject<TEntity>( json );

            }
            else
            {
                throw new Exception( response.ReasonPhrase );
            }

        }
      
    }
}
