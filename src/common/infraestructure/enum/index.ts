export enum Dialect {
    POSTGRES = 'postgres',
    MYSQL = 'mysql',
    MARIADB = 'mariadb',
    ORACLE = 'oracle',
} 

export enum MailQueue {
    FlightQueue = 'flights',
}

export enum FlightMSG {
    CREATE = 'CREATE_PASSENGER',
    UPDATE = 'UPDATE_PASSENGER',
    DELETE = 'DELETE_PASSENGER',
  }