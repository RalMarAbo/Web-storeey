using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorStore.Models
{
    public class MailSubscription
    {
        [Required]
        [StringLength(50, ErrorMessage = "{0} Jābūt vismaz {2} un maksimums {1} simbolus garam.", MinimumLength = 6)]
        [EmailAddress]
        public string Email { get; set; }
    }
}
