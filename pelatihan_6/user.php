use Spatie\Permission\Traits\HasRoles;

use Notifiable, HasRoles;
    
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }