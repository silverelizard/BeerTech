﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BeerTech.DataObjects;

namespace BeerTech.Repository
{
    public class BeverageRequestRepository : BaseRepository<BeverageRequest>
    {
        public BeverageRequestRepository()
            : base()
        {
        }

        public IList<BeverageRequest> GetAllRequests()
        {

            return Session.QueryOver<BeverageRequest>().List();


        }
    }
}