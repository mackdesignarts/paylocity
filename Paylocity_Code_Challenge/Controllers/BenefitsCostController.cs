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
    public class BenefitsCostController : ApiController
    {
        private PaylocityCCEntitiesContainer db = new PaylocityCCEntitiesContainer();

        // GET api/BenefitsCost
        public IQueryable<BenefitsCost> GetBenefitsCosts()
        {
            return db.BenefitsCosts;
        }

        // GET api/BenefitsCost/5
        [ResponseType(typeof(BenefitsCost))]
        public IHttpActionResult GetBenefitsCost(int id)
        {
            BenefitsCost benefitscost = db.BenefitsCosts.Find(id);
            if (benefitscost == null)
            {
                return NotFound();
            }

            return Ok(benefitscost);
        }
                
        // POST api/BenefitsCost
        [ResponseType(typeof(BenefitsCost))]
        public IHttpActionResult PostBenefitsCost(BenefitsCost benefitscost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.BenefitsCosts.Add(benefitscost);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = benefitscost.Id }, benefitscost);
        }

        // DELETE api/BenefitsCost/5
        [ResponseType(typeof(BenefitsCost))]
        public IHttpActionResult DeleteBenefitsCost(int id)
        {
            BenefitsCost benefitscost = db.BenefitsCosts.Find(id);
            if (benefitscost == null)
            {
                return NotFound();
            }

            db.BenefitsCosts.Remove(benefitscost);
            db.SaveChanges();

            return Ok(benefitscost);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BenefitsCostExists(int id)
        {
            return db.BenefitsCosts.Count(e => e.Id == id) > 0;
        }
    }
}