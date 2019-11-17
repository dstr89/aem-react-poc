package hr.strmecki.demo.models;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class HeadlineWithCtasModel
{

    private static final Gson GSON = new GsonBuilder().disableHtmlEscaping().create();

    @ValueMapValue
    @Default(values = StringUtils.EMPTY)
    private String title;

    @ValueMapValue(name = "sub-title")
    @Default(values = StringUtils.EMPTY)
    private String subTitle;

    @ChildResource
    private List<CtaModel> ctas;

    private String id = "headline-with-ctas-" + UUID.randomUUID();

    public String getId()
    {
        return id;
    }

    public String getTitle()
    {
        return title;
    }

    public String getSubTitle()
    {
        return subTitle;
    }

    public String getCtas()
    {
        return GSON.toJson(Optional.ofNullable(ctas).orElse(Collections.emptyList()));
    }

}
