using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Paylocity_Code_Challenge.Data;

namespace Paylocity_Code_Challenge.Controllers
{
    public class DependentsController : ApiController
    {
        private PaylocityCCEntitiesContainer db = new PaylocityCCEntitiesContainer();

        // GET api/Dependents
        public IQueryable<Dependents> GetDependents()
        {
            return db.Dependents;
        }

        // GET api/Dependents/5
        [ResponseType(typeof(Dependents))]
        public IHttpActionResult GetDependents(int id)
        {
            Dependents dependents = db.Dependents.Find(id);
            if (dependents == null)
            {
                return NotFound();
            }

            return Ok(dependents);
        }
       
        // POST api/Dependents
        [ResponseType(typeof(Dependents))]
        public IHttpActionResult PostDependents(Dependents dependents)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Dependents.Add(dependents);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = dependents.Id }, dependents);
        }

        // DELETE api/Dependents/5
        [ResponseType(typeof(Dependents))]
        public IHttpActionResult DeleteDependents(int id)
        {
            Dependents dependents = db.Dependents.Find(id);
            if (dependents == null)
            {
                return NotFound();
            }

            db.Dependents.Remove(dependents);
            db.SaveChanges();

            return Ok(dependents);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DependentsExists(int id)
        {
            return db.Dependents.Count(e => e.Id == id) > 0;
        }
    }
}