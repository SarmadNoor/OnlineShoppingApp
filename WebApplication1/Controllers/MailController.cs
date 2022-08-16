using Microsoft.AspNetCore.Mvc;
using PeijiShoppingSolution.Interface;
using PeijiShoppingSolution.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeijiShoppingSolution.Controllers
{
    public class MailController: Controller
    {
        private readonly IMailService mailService;
        public MailController(IMailService mailService)
        {
            this.mailService = mailService;
        }
        [HttpPost]
        public async Task<IActionResult> SendMail([FromBody] MailRequest request)
        {
            try
            {
                await mailService.SendEmailAsync(request);
                return Ok();
            }
            catch (Exception ex)
            {
                throw;
            }

        }
    }
}
