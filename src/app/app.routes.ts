import { Routes } from '@angular/router';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { LoginComponent } from '../login/login.component';
import { AlterCatalogoComponent } from '../alter_catalogo/alter-catalogo/alter-catalogo.component';
import { AuthGuard } from '../guards/auth.guard';
import { AnamnesisFormComponent } from '../anamnesis-form/anamnesis-form.component';

export 
    const routes: Routes = [
        { 
            path: '',
            component: CatalogoComponent,
        },
        { 
            path: 'login',
            component: LoginComponent,
        },
        {
            path: 'anamnesis_form',
            component: AnamnesisFormComponent,
        },
        { 
            path: 'alter',
            component: AlterCatalogoComponent,
            
        // ativa a proteção de rota
            canActivate:[AuthGuard]
        },
    
    ];
