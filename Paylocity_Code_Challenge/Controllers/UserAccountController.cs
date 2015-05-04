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
    public class UserAccountController : ApiController
    {
        private PaylocityCCEntitiesContainer db = new PaylocityCCEntitiesContainer();

        // GET api/UserAccount
        public IQueryable<UserAccount> GetUserAccounts()
        {
            return db.UserAccounts;
        }

        // GET api/UserAccount/5
        [ResponseType(typeof(UserAccount))]
        public IHttpActionResult GetUserAccount(int id)
        {
            UserAccount useraccount = db.UserAccounts.Find(id);
            if (useraccount == null)
            {
                return NotFound();
            }

            return Ok(useraccount);
        }
        
        // POST api/UserAccount
        [ResponseType(typeof(UserAccount))]
        public IHttpActionResult PostUserAccount(UserAccount useraccount)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserAccounts.Add(useraccount);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = useraccount.Id }, useraccount);
        }

        // DELETE api/UserAccount/5
        [ResponseType(typeof(UserAccount))]
        public IHttpActionResult DeleteUserAccount(int id)
        {
            UserAccount useraccount = db.UserAccounts.Find(id);
            if (useraccount == null)
            {
                return NotFound();
            }

            db.UserAccounts.Remove(useraccount);
            db.SaveChanges();

            return Ok(useraccount);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserAccountExists(int id)
        {
            return db.UserAccounts.Count(e => e.Id == id) > 0;
        }
    }
}