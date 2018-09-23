import { Strategy, IVerifyOptions } from 'passport-local';

export class LocalStrategy {

    public static create() {
        return new Strategy((username: string, password: string, done: (error: any, user?: any, options?: IVerifyOptions) => void) => {
            return done(null, { id: 1, username: 'jack', password: 'secret', displayName: 'Jack', emails: [ { value: 'jack@example.com' } ] });
        });
    }
    
    public static serializeUser(user: any, done: (err: any, id?: any) => void) {
        done(null, user.id);
    }

    public static deserializeUser(id: any, done: (err: any, user?: any) => void) {
        /*
        db.users.findById(id, function (err, user) {
            if (err) { return done(err); }
            done(null, user);
        });
        */
       console.log(id);
       done(null, { id: 1, username: 'jack', password: 'secret', displayName: 'Jack', emails: [ { value: 'jack@example.com' } ] });
    }
}
