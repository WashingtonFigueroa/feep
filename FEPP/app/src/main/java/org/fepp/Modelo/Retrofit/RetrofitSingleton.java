package org.fepp.Modelo.Retrofit;

import org.fepp.Tools.Const;

import io.reactivex.disposables.CompositeDisposable;
import io.reactivex.disposables.Disposable;
import retrofit2.Retrofit;
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitSingleton {

    private static RetrofitSingleton retrofitSingleton;
    private static Retrofit retrofit;
    private static Requests requests;
    private static CompositeDisposable compositeDisposable;

    private RetrofitSingleton(){
        if(retrofit==null && requests==null && compositeDisposable==null){
            compositeDisposable=new CompositeDisposable();
            retrofit=new Retrofit.Builder()
                    .baseUrl(Const.URL_BASE)
                    .addConverterFactory(GsonConverterFactory.create())
                    .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                    .build();

            requests=retrofit.create(Requests.class);
        }
    }

    public static synchronized RetrofitSingleton getInstance(){
        if(retrofitSingleton==null)
            retrofitSingleton=new RetrofitSingleton();
        return retrofitSingleton;
    }

    public Requests getRequests(){
        return requests;
    }

    public void addReq(Disposable disposable){
        compositeDisposable.add(disposable);
    }
}
